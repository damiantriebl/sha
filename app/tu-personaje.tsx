import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

  const TuPersonaje = () => {
    return (<Card className="bg-orange-700 w-2/6">
        <CardHeader className="bg-primary">
            <CardTitle>Que Personaje te cruzaste?</CardTitle>
        </CardHeader>
        <CardContent className="bg-primary">
            <p>Card Content</p>
        </CardContent>
       
    </Card>
    )
}
export default TuPersonaje;