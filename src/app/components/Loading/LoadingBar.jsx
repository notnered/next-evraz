import { BarLoader } from "react-spinners"

const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

export default function LoadingBar(){
    
    return (
        <BarLoader
            color={'#F0862F'}
            style={override}
            size={150}
            aria-label="Loading Spinner"
            data-testid="loader"
        />
    )
}