
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

interface LoginFormData {
  username: string;
  password: string;
}

const AdminLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<LoginFormData>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginFormData) => {
    setIsLoading(true);
    
    // Simple authentication check (replace with real authentication)
    if (data.username === "admin" && data.password === "offensivesec2024") {
      // Store authentication status in localStorage
      localStorage.setItem("isAdminAuthenticated", "true");
      toast.success("Login successful!");
      navigate("/admin/dashboard");
    } else {
      toast.error("Invalid credentials. Please try again.");
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="flex items-center justify-center py-20">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-gray-900">Admin Login</CardTitle>
            <p className="text-gray-600">Access the administrative panel</p>
          </CardHeader>
          
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <FormField
                  control={form.control}
                  name="username"
                  rules={{ required: "Username is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Username</FormLabel>
                      <FormControl>
                        <Input {...field} type="text" placeholder="Enter username" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <FormField
                  control={form.control}
                  name="password"
                  rules={{ required: "Password is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input {...field} type="password" placeholder="Enter password" />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                
                <Button type="submit" className="w-full bg-red-400 hover:bg-red-500" disabled={isLoading}>
                  {isLoading ? "Logging in..." : "Login"}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
      
      <Footer />
    </div>
  );
};

export default AdminLogin;
