import { Alert, AlertTitle, AlertDescription } from "./components/ui/alert";
import { Warning, ArrowClockwise } from "@phosph
interface ErrorFallbackProps {

interface ErrorFallbackProps {
  error: Error;
  resetErrorBoundary: () => void;
}

          </AlertDescription>
        
          <h3 className="font-semibold text-sm text-muted-foreground mb-2">Error Deta
            {error.message}
        </div>
          <Warning size={16} />
          <AlertTitle>This spark has encountered a runtime error</AlertTitle>
          <AlertDescription>
            Something unexpected happened while running the application. The error details are shown below. Contact the spark author and let them know about this issue.
          </AlertDescription>
          <Arrow
        

          <h3 className="font-semibold text-sm text-muted-foreground mb-2">Error Details:</h3>
          <pre className="text-xs text-destructive bg-muted/50 p-3 rounded border overflow-auto max-h-32">
            {error.message}
          </pre>
        </div>
        
        <Button 
          onClick={resetErrorBoundary} 
          className="w-full"
          variant="outline"







