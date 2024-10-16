import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

export default function PricingCards() {
  const tiers = [
    {
      name: "Freemium",
      price: "$0/month",
      access: "Available by invitation from clients",
      useCase: "Ideal for consulting firms looking to showcase their services",
      features: [
        "Join client collaboration hubs by invitation",
        "Basic access to collaboration tools",
        "View contract status and performance metrics",
        "Limited document sharing and feedback tools",
      ],
      bestFor: "Consultants just getting started or wanting to explore client collaboration opportunities.",
    },
    {
      name: "Consulting Firm",
      price: "$1500/month or $12000/year",
      access: "Create and manage your own private collaboration hub",
      useCase: "Designed for consulting firms collaborating directly with clients",
      features: [
        "Private hub to invite clients",
        "Enhanced contract management features",
        "Real-time performance tracking for client projects",
        "Access to advanced collaboration tools like document versioning and audit logs",
      ],
      bestFor: "Consulting firms looking for an end-to-end solution to collaborate with clients efficiently.",
    },
    {
      name: "Enterprise",
      price: "Custom Pricing Based on Scale and Needs",
      access: "Full control over a customizable collaboration ecosystem",
      useCase: "Perfect for enterprises managing large-scale projects across multiple teams and suppliers",
      features: [
        "Fully customizable private collaboration hubs",
        "Invite clients and suppliers to collaborate seamlessly",
        "Advanced contract and performance analytics",
        "Priority support and custom integrations available",
        "Full suite of collaboration, feedback, and performance tools for both internal and external teams",
      ],
      bestFor: "Large enterprises looking to manage complex collaboration networks and performance data across suppliers and clients.",
    },
  ]

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, index) => (
          <Card key={index} className="flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-bold">{tier.name}</CardTitle>
              {tier.name === "Enterprise" ? (
                <CardDescription className="text-xl font-semibold text-primary mt-2">
                  Custom Pricing
                  <span className="block text-sm font-normal text-muted-foreground">
                    Based on Scale and Needs
                  </span>
                </CardDescription>
              ) : (
                <CardDescription className="text-xl font-semibold text-primary mt-2">
                  {tier.price}
                </CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="font-semibold mb-2">Access:</p>
              <p className="mb-4 text-sm text-muted-foreground">{tier.access}</p>
              <p className="font-semibold mb-2">Use Case:</p>
              <p className="mb-4 text-sm text-muted-foreground">{tier.useCase}</p>
              <p className="font-semibold mb-2">Features:</p>
              <ul className="list-none space-y-2 mb-4">
                {tier.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="flex-col items-start">
              <p className="font-semibold mb-2">Best for:</p>
              <p className="text-sm text-muted-foreground mb-4">{tier.bestFor}</p>
              <Button className="w-full">{tier.name === "Enterprise" ? "Contact Sales" : "Get Started"}</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}