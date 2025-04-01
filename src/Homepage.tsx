import { Button } from "react-bootstrap";

export function Homepage(): React.JSX.Element {
   
    return (
<span>
  <Button size="lg" style={{ marginRight: "400px", padding: "120px 24px" }}>
    Detailed Quiz
  </Button>
  <Button size="lg" style={{ padding: "120px 45px" }}>
    Basic Quiz
  </Button>
</span>
    );
}