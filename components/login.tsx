"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { login } from "@/app/actions/auth"

export default function Login() {
  const [isLoading, setIsLoading] = useState(false)

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsLoading(true)

    const formData = new FormData(event.currentTarget)
    const response = await login(formData)

    setIsLoading(false)

    if (response.error) {
      // Handle error
      console.error(response.error)
    } else {
      // Handle successful login
      console.log("Login successful")
    }
  }

  return (
    <div className="max-w-md mx-auto mt-8">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input id="password" name="password" type="password" required />
        </div>
        <Button type="submit" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Log in"}
        </Button>
      </form>
    </div>
  )
}

