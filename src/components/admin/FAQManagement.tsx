
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Plus, Trash2 } from "lucide-react";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQManagementProps {
  faqs: FAQItem[];
  setFaqs: (faqs: FAQItem[]) => void;
}

const FAQManagement = ({ faqs, setFaqs }: FAQManagementProps) => {
  const addNewFaq = () => {
    const newFaq: FAQItem = {
      id: Date.now().toString(),
      question: "New Question",
      answer: "New Answer"
    };
    const updatedFaqs = [...faqs, newFaq];
    setFaqs(updatedFaqs);
    localStorage.setItem("faqData", JSON.stringify(updatedFaqs));
    toast.success("New FAQ added");
  };

  const updateFaq = (faqId: string, field: 'question' | 'answer', value: string) => {
    const updatedFaqs = faqs.map(faq => 
      faq.id === faqId ? { ...faq, [field]: value } : faq
    );
    setFaqs(updatedFaqs);
    localStorage.setItem("faqData", JSON.stringify(updatedFaqs));
    toast.success("FAQ updated successfully");
  };

  const deleteFaq = (faqId: string) => {
    const updatedFaqs = faqs.filter(faq => faq.id !== faqId);
    setFaqs(updatedFaqs);
    localStorage.setItem("faqData", JSON.stringify(updatedFaqs));
    toast.success("FAQ deleted");
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">FAQ Management</h2>
        <Button onClick={addNewFaq} className="flex items-center bg-red-400 hover:bg-red-500">
          <Plus className="mr-2 h-4 w-4" />
          Add FAQ
        </Button>
      </div>

      {faqs.map((faq) => (
        <Card key={faq.id}>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl text-gray-900">FAQ Item</CardTitle>
            <Button 
              onClick={() => deleteFaq(faq.id)}
              variant="outline"
              size="sm"
              className="text-red-600 hover:text-red-700"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Question
              </label>
              <Input
                value={faq.question}
                onChange={(e) => updateFaq(faq.id, "question", e.target.value)}
                placeholder="Enter FAQ question"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Answer
              </label>
              <Textarea
                value={faq.answer}
                onChange={(e) => updateFaq(faq.id, "answer", e.target.value)}
                placeholder="Enter FAQ answer"
                rows={4}
              />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default FAQManagement;
