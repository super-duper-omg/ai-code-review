import { Leaf, Heart, Truck } from "lucide-react"

const features = [
  {
    name: "Fresh Flowers",
    description: "Our flowers are handpicked daily to ensure the highest quality and freshness.",
    icon: Leaf,
  },
  {
    name: "Customized Arrangements",
    description: "Create your perfect bouquet with our wide selection of flowers and customization options.",
    icon: Heart,
  },
  {
    name: "Fast Delivery",
    description: "Same-day delivery available for orders placed before 2 PM in your local time zone.",
    icon: Truck,
  },
]

export default function Features() {
  return (
    <div className="py-12 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-pink-600 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A better way to send flowers
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Experience the joy of giving with our premium flower delivery service.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-pink-500 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                </dt>
                <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

