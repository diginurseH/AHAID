
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import NursaeraPlatform from "./NursaeraPlatform";
import SMETransformation from "./SMETransformation";
import ImpactMetrics from "./ImpactMetrics";
import StakeholderNetwork from "./StakeholderNetwork";
import SustainabilityModel from "./SustainabilityModel";
import EcosystemMap from "./EcosystemMap";

interface EcosystemDetailModalProps {
  sectionId: string | null;
  isOpen: boolean;
  onClose: () => void;
}

const EcosystemDetailModal = ({ sectionId, isOpen, onClose }: EcosystemDetailModalProps) => {
  const renderContent = () => {
    switch (sectionId) {
      case "nursaera":
        return <NursaeraPlatform />;
      case "sme":
        return <SMETransformation />;
      case "impact":
        return <ImpactMetrics />;
      case "network":
        return <StakeholderNetwork />;
      case "sustainability":
        return <SustainabilityModel />;
      case "map":
        return <EcosystemMap />;
      case "detailed":
        return (
          <div className="space-y-6">
            <NursaeraPlatform />
            <SMETransformation />
            <ImpactMetrics />
            <StakeholderNetwork />
            <SustainabilityModel />
          </div>
        );
      default:
        return <div>Select a section to view details</div>;
    }
  };

  const getTitle = () => {
    switch (sectionId) {
      case "nursaera": return "Nursaera Platform Details";
      case "sme": return "SME Digital Transformation";
      case "impact": return "Impact Metrics Dashboard";
      case "network": return "Stakeholder Network";
      case "sustainability": return "Sustainability Model";
      case "map": return "Ecosystem Map";
      case "detailed": return "Complete Ecosystem Details";
      default: return "Ecosystem Details";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl text-green-800">{getTitle()}</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>
        </DialogHeader>
        <div className="mt-6">
          {renderContent()}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EcosystemDetailModal;
