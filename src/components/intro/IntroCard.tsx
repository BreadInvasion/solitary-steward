import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield } from 'lucide-react'

interface IntroCardTypes {
    begin: () => void;
}

function IntroCard({ begin }: IntroCardTypes) {

  return (
    <Card className="w-fit m-auto">
        <CardHeader>
            <Shield size={48} className={"self-center"}></Shield>
            <CardTitle>Welcome to Solitary Steward</CardTitle>
            <CardDescription>An action visualizer for Solitary Throne.</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center gap-2">
            <p className='w-56 text-center'>The action visualizer is currently still in development. Click here to see the game roster:</p>
            <Button onClick={begin}>Roster</Button>
        </CardContent>
    </Card>
  )
}

export default IntroCard