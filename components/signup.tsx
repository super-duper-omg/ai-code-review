"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signup } from "@/app/actions/auth"

export default function Signup() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const response = await signup(formData)

    setIsLoading(false)

    if (response.error) {
      // Handle error
      console.error(response.error)
    } else {
      // Handle successful signup
      console.log("Signup successful")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Signing up..." : "Sign up"}
        </Button>
      </form>
    </div>
  )
}

