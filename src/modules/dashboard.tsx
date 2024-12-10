import Home from "@/lib/components/home/home"

export const Dashboard =() => {
  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <main className="flex-1 p-6">
        <Home />
      </main>
    </div>
  )
}

