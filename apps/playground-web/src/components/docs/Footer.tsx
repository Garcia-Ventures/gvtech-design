import { Button, Separator, Tooltip, TooltipContent, TooltipTrigger } from '@gv-tech/ui-web';
import { FaLinkedin } from 'react-icons/fa6';
import { SiGithub, SiX } from 'react-icons/si';

export function Footer() {
  return (
    <footer className="bg-muted/40 border-border/50 border-t">
      <div className="w-full px-6 py-12 md:px-12 lg:px-16">
        <div className="flex flex-col gap-10 md:flex-row md:justify-between">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-primary flex h-8 w-8 items-center justify-center rounded-lg shadow-sm">
                <span className="text-primary-foreground text-sm font-bold">GV</span>
              </div>
              <h3 className="text-lg font-bold tracking-tight">GVTech Design</h3>
            </div>
            <p className="text-muted-foreground max-w-xs text-sm leading-relaxed">
              A premium React component library built with performance and aesthetics in mind. Created for Garcia
              Ventures.
            </p>
            <div className="flex items-center space-x-1">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground h-9 w-9"
                    asChild
                  >
                    <a
                      href="https://github.com/Garcia-Ventures"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <SiGithub className="h-5 w-5" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>GitHub</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground h-9 w-9"
                    asChild
                  >
                    <a href="https://x.com/garciaericn" target="_blank" rel="noopener noreferrer" aria-label="X">
                      <SiX className="h-4 w-4" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>X</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-muted-foreground hover:text-foreground h-9 w-9"
                    asChild
                  >
                    <a
                      href="https://www.linkedin.com/in/garciaericn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
            </div>
          </div>

          {/* Links Groups */}
          <div className="flex flex-col gap-10 sm:flex-row md:gap-24">
            {/* Resources */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase">Resources</h4>
              <ul className="text-muted-foreground space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://github.com/Garcia-Ventures/gvtech-design"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    GitHub Repository
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.npmjs.com/package/@gv-tech/design-system"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    NPM Package
                  </a>
                </li>
                <li>
                  <a
                    href="https://ui.shadcn.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    shadcn/ui
                  </a>
                </li>
              </ul>
            </div>

            {/* Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold tracking-wider uppercase">Ecosystem</h4>
              <ul className="text-muted-foreground space-y-2.5 text-sm">
                <li>
                  <a
                    href="https://reactnativereusables.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    RN Reusables
                  </a>
                </li>
                <li>
                  <a
                    href="https://tailwindcss.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Tailwind CSS
                  </a>
                </li>
                <li>
                  <a
                    href="https://lucide.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-foreground transition-colors"
                  >
                    Lucide Icons
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-border/50 mt-12 border-t pt-8">
          <div className="text-muted-foreground flex flex-col items-center justify-between gap-4 text-xs md:flex-row">
            <p>© {new Date().getFullYear()} GVTech. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <p>
                Built with{' '}
                <a
                  href="https://ui.shadcn.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground underline underline-offset-4"
                >
                  shadcn/ui
                </a>
              </p>
              <Separator orientation="vertical" className="h-4" />
              <p>
                Crafted by{' '}
                <a
                  href="https://github.com/garciaericn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground underline underline-offset-4"
                >
                  Garcia Ventures
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
