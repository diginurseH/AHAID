import { createClient, PostgrestError } from '@supabase/supabase-js';

// Create a temporary Database type until you generate the real one
export interface Database {
  public: {
    Tables: {
      [key: string]: any;
    };
    Views: {
      [key: string]: any;
    };
    Functions: {
      [key: string]: any;
    };
  };
}

// Safely access environment variables with fallbacks
const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || '';

// Create the client
const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey);

interface FetchOptions<T> {
  onSuccess?: (data: T) => void;
  onError?: (error: PostgrestError) => void;
}

// Helper function to standardize error handling
const handleError = (err: unknown, context: string): PostgrestError => {
  console.error(`Unexpected error ${context}:`, err);
  return {
    message: 'An unexpected error occurred',
    details: err instanceof Error ? err.message : String(err),
    hint: '',
    code: 'unknown',
  } as PostgrestError;
};

/**
 * A wrapper around Supabase client to standardize API access patterns
 */
export const supabaseApi = {
  /**
   * Fetch data from a table with optional filtering
   */
  async fetchData<T>(
    table: string & keyof Database['public']['Tables'],
    options: {
      columns?: string;
      filters?: { column: string; operator: string; value: any }[];
      orderBy?: { column: string; ascending?: boolean };
      limit?: number;
    } = {},
    fetchOptions?: FetchOptions<T[]>
  ): Promise<{ data: T[] | null; error: PostgrestError | null }> {
    try {
      let query = supabase.from(table).select(options.columns || '*');

      // Apply filters if provided
      if (options.filters && options.filters.length > 0) {
        options.filters.forEach(filter => {
          query = query.filter(filter.column, filter.operator, filter.value);
        });
      }

      // Apply ordering if provided
      if (options.orderBy) {
        query = query.order(options.orderBy.column, {
          ascending: options.orderBy.ascending ?? true,
        });
      }

      // Apply limit if provided
      if (options.limit) {
        query = query.limit(options.limit);
      }

      const { data, error } = await query;

      if (error) {
        console.error(`Error fetching data from ${table}:`, error);
        fetchOptions?.onError?.(error);
        return { data: null, error };
      }

      fetchOptions?.onSuccess?.(data as T[]);
      return { data: data as T[], error: null };
    } catch (err) {
      const error = handleError(err, `fetching data from ${table}`);
      fetchOptions?.onError?.(error);
      return { data: null, error };
    }
  },

  /**
   * Insert data into a table
   */
  async insertData<T>(
    table: string & keyof Database['public']['Tables'],
    data: Partial<T> | Partial<T>[],
    fetchOptions?: FetchOptions<T[]>
  ): Promise<{ data: T[] | null; error: PostgrestError | null }> {
    try {
      const { data: result, error } = await supabase.from(table).insert(data).select();

      if (error) {
        console.error(`Error inserting data into ${table}:`, error);
        fetchOptions?.onError?.(error);
        return { data: null, error };
      }

      fetchOptions?.onSuccess?.(result as T[]);
      return { data: result as T[], error: null };
    } catch (err) {
      const error = handleError(err, `inserting data into ${table}`);
      fetchOptions?.onError?.(error);
      return { data: null, error };
    }
  },

  /**
   * Update data in a table
   */
  async updateData<T>(
    table: string & keyof Database['public']['Tables'],
    id: number | string,
    data: Partial<T>,
    options: {
      idColumn?: string;
    } = {},
    fetchOptions?: FetchOptions<T[]>
  ): Promise<{ data: T[] | null; error: PostgrestError | null }> {
    try {
      const idColumn = options.idColumn || 'id';
      const { data: result, error } = await supabase
        .from(table)
        .update(data)
        .eq(idColumn, id)
        .select();

      if (error) {
        console.error(`Error updating data in ${table}:`, error);
        fetchOptions?.onError?.(error);
        return { data: null, error };
      }

      fetchOptions?.onSuccess?.(result as T[]);
      return { data: result as T[], error: null };
    } catch (err) {
      const error = handleError(err, `updating data in ${table}`);
      fetchOptions?.onError?.(error);
      return { data: null, error };
    }
  },

  /**
   * Delete data from a table
   */
  async deleteData<T>(
    table: string & keyof Database['public']['Tables'],
    id: number | string,
    options: {
      idColumn?: string;
    } = {},
    fetchOptions?: FetchOptions<T[]>
  ): Promise<{ data: T[] | null; error: PostgrestError | null }> {
    try {
      const idColumn = options.idColumn || 'id';
      const { data: result, error } = await supabase
        .from(table)
        .delete()
        .eq(idColumn, id)
        .select();

      if (error) {
        console.error(`Error deleting data from ${table}:`, error);
        fetchOptions?.onError?.(error);
        return { data: null, error };
      }

      fetchOptions?.onSuccess?.(result as T[]);
      return { data: result as T[], error: null };
    } catch (err) {
      const error = handleError(err, `deleting data from ${table}`);
      fetchOptions?.onError?.(error);
      return { data: null, error };
    }
  },
};
