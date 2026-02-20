import { Button, Separator, Tooltip, TooltipContent, TooltipTrigger } from '@gv-tech/ui-web';
import { SiGithub, SiLinkedin, SiX } from 'react-icons/si';

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="p-8 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-semibold">GV Tech Design System</h3>
            <p className="text-sm text-muted-foreground">
              A comprehensive React component library for building modern applications.
            </p>
          </div>

          {/* Resources */}
          <div className="space-y-3">
            <h4 className="font-medium text-sm">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
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
              <li>
                <a
                  href="https://reactnativereusables.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors"
                >
                  React Native Reusables
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-medium text-sm">Connect</h4>
            <div className="flex items-center space-x-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" asChild>
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
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" asChild>
                    <a
                      href="https://twitter.com/garciaericn"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="X (formerly Twitter)"
                    >
                      <SiX className="h-4 w-4" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>X (formerly Twitter)</TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground" asChild>
                    <a
                      href="https://www.linkedin.com/in/garciaericn/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <SiLinkedin className="h-5 w-5" />
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>LinkedIn</TooltipContent>
              </Tooltip>
            </div>
          </div>
        </div>

        <Separator />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© GVTech 2026. All rights reserved.</p>
          <p>
            Built with{' '}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              shadcn/ui
            </a>{' '}
            and{' '}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              Tailwind CSS
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
