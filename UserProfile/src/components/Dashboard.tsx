import { MessageCircle, Video, FileText, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const Dashboard = () => {
  const tasks = [
    "Upload Supporting Documents",
    "Submit Evidence",
    "Provide Background Information",
    "Read Provided Resources",
  ];

  const documents = [
    "Employment Agreement",
    "Non-Disclosure Agreement (NDA)",
    "Partnership Deed",
    "Lease Agreement",
  ];

  return (
    <div className="p-6 bg-lawlink-light min-h-screen">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-lawlink-primary mb-2">
          WELCOME DESHAN !
        </h1>
        <p className="text-lawlink-gray">CASE NAME #202534</p>
        
        <div className="flex gap-4 mt-6">
          <Button className="bg-white hover:bg-gray-50 text-lawlink-primary border border-gray-200">
            <MessageCircle className="w-5 h-5 mr-2" />
            MESSAGE LAWYER
          </Button>
          <Button className="bg-white hover:bg-gray-50 text-lawlink-primary border border-gray-200">
            <Video className="w-5 h-5 mr-2" />
            SCHEDULE MEETING
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-cyan-400">●</span> TASKS
          </h2>
          <div className="space-y-4">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="flex items-start gap-3 text-sm text-lawlink-gray"
              >
                <CheckCircle2 className="w-5 h-5 text-gray-400" />
                <span>{task}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-purple-400">●</span> LAWYER NOTES
          </h2>
          <div className="space-y-4 text-sm text-lawlink-gray">
            <p>
              I reviewed the employment contract you uploaded. The non-compete
              clause seems overly restrictive and may not hold up in court. I
              suggest renegotiating this clause with your employer to avoid future
              disputes.
            </p>
          </div>
        </Card>

        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <span className="text-cyan-400">●</span> DOCUMENTS
          </h2>
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm text-lawlink-gray"
              >
                <FileText className="w-5 h-5 text-gray-400" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      <div className="fixed top-4 right-4 bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm flex items-center gap-2">
        <span>NEXT COURT DATE</span>
        <span className="font-semibold">2025 DECEMBER 15</span>
      </div>
    </div>
  );
};

export default Dashboard;