import * as React from "react"
import { Link } from 'react-router-dom'
import { ChevronRight, Home, LogOut, Moon, PieChart, Sun } from 'lucide-react'
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = React.useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <TooltipProvider delayDuration={0}>
      <div
        className={`relative p-6 flex h-screen flex-col gap-6 border-r bg-background ${
          isCollapsed ? "w-24" : "w-60"
        }`}
      >
        <div className="flex items-center justify-between mb-2">
        <Tooltip>
            <TooltipTrigger asChild>
              <div className="flex items-center gap-2">
              <img 
          src="https://thumbs.dreamstime.com/b/main-artboard-336640193.jpg" 
          alt="Logo"
          className={`rounded-lg ${
            isCollapsed 
              ? "h-8 w-40" // Larger size when collapsed
              : "h-8 w-8"   // Normal size when expanded
          }`}
        />
                {!isCollapsed && (
                  <span className="font-semibold text-lg">My App</span>
                )}
              </div>
            </TooltipTrigger>
          </Tooltip>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => setIsCollapsed(!isCollapsed)}
          >
            <ChevronRight
              className={`h-4 w-4 transition-transform ${
                isCollapsed ? "rotate-180" : ""
              }`}
            />
          </Button>
        </div>


        <nav className="flex flex-1 flex-col gap-1">
          <Button
            variant="ghost"
            size={isCollapsed ? "icon" : "default"}
            className={`justify-start  hover:bg-[#6C63FF]/90 hover:text-white ${
              isCollapsed ? 'px-2' : 'px-3'
            }`}
            asChild
          >
            <Link to="/" className="flex items-center w-full">
              <Home className={`h-4 w-4 ${!isCollapsed && "mr-2"}`} />
              {!isCollapsed && <span>Home</span>}
            </Link>
          </Button>

          <Button
            variant="ghost"
            size={isCollapsed ? "icon" : "default"}
            className={`justify-start hover:bg-[#6C63FF]/90 hover:text-white ${isCollapsed ? 'px-2' : 'px-3'}`}
            asChild
          >
            <Link to="/product" className="flex items-center w-full">
              <PieChart className={`h-4 w-4 ${!isCollapsed && "mr-2"}`} />
              {!isCollapsed && <span>Product</span>}
            </Link>
          </Button>
        </nav>

        <div className="mt-auto pt-6 flex flex-col gap-2">
          <Button
            variant="ghost"
            size={isCollapsed ? "icon" : "default"}
            className="justify-start hover:bg-[#6C63FF]/90 hover:text-white"
          >
            <LogOut className="h-4 w-4" />
            {!isCollapsed && <span className="ml-2 ">Logout</span>}
          </Button>
          <Button
            variant="ghost"
            size={isCollapsed ? "icon" : "default"}
            onClick={toggleTheme}
            className="justify-start hover:bg-[#6C63FF]/90 hover:text-white"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            {!isCollapsed && (
              <span className="mr-2 ">
                {theme === "dark" ? "Light Mode" : "Dark Mode"}
              </span>
            )}
          </Button>
        </div>
      </div>
    </TooltipProvider>
  )
}
