'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { Ghost, Camera, ThumbsUp, LogOut } from 'lucide-react'
import { useAuth0 } from '@auth0/auth0-react'

export default function HomePage() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0()

  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault()
    loginWithRedirect()
  }

  const handleLogout = () => {
    logout({ returnTo: window.location.origin })
  }

  if (isLoading) {
    return (
        <div className="min-h-screen bg-black text-orange-500 flex items-center justify-center">
          <Ghost className="animate-pulse w-16 h-16" />
        </div>
    )
  }

  return (
      <div className="min-h-screen bg-black text-orange-500">
        <div className="container max-w-4xl mx-auto px-4 py-8">
          <header className="text-center mb-12">
            <Ghost className="inline-block w-16 h-16 mb-4" />
            <h1 className="text-4xl font-bold mb-2">Spooktacular Costume Contest</h1>
            <p className="text-xl">Vote for the most bone-chilling costume!</p>
          </header>

          {!isAuthenticated ? (
              <Card className="bg-gray-900 border-orange-500">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-4">Enter the Haunted House</h2>
                  <Button onClick={handleLogin} className="w-full bg-orange-500 text-black hover:bg-orange-600">
                    Join the Nightmare
                  </Button>
                </CardContent>
              </Card>
          ) : (
              <div className="space-y-8">
                <Card className="bg-gray-900 border-orange-500">
                  <CardContent className="p-6 flex justify-between items-center">
                    <div>
                      <h2 className="text-2xl font-bold mb-2">Welcome, {user?.name || 'Spooky User'}!</h2>
                      <p className="text-orange-300">Ready to haunt the competition?</p>
                    </div>
                    <Button onClick={handleLogout} variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-black">
                      <LogOut className="mr-2 h-4 w-4" /> Escape
                    </Button>
                  </CardContent>
                </Card>

                <Card className="bg-gray-900 border-orange-500">
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-bold mb-4">Upload Your Terrifying Costume</h2>
                    <div className="flex items-center justify-center h-48 bg-gray-800 rounded-lg mb-4">
                      <Camera className="w-12 h-12" />
                    </div>
                    <Button className="w-full bg-orange-500 text-black hover:bg-orange-600">
                      Capture Your Horror
                    </Button>
                  </CardContent>
                </Card>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="bg-gray-900 border-orange-500">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Zombie Bride</h3>
                      <Skeleton className="w-full h-48 bg-gray-800 rounded-lg mb-4" />
                      <Button className="w-full bg-orange-500 text-black hover:bg-orange-600">
                        <ThumbsUp className="mr-2 h-4 w-4" /> Cast Your Curse
                      </Button>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-900 border-orange-500">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-2">Werewolf Warrior</h3>
                      <Skeleton className="w-full h-48 bg-gray-800 rounded-lg mb-4" />
                      <Button className="w-full bg-orange-500 text-black hover:bg-orange-600">
                        <ThumbsUp className="mr-2 h-4 w-4" /> Cast Your Curse
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </div>
          )}

          <footer className="mt-12 text-center">
            <p>Beware! The voting ends when the clock strikes midnight! 🕛</p>
          </footer>
        </div>
      </div>
  )
}
