import imag1 from "./assets/hand tools.webp"
import imag2 from "./assets/Fans.webp"
import imag3 from "./assets/curtains.webp"
import imag4 from "./assets/women fashion.webp"
import imag5 from "./assets/inverter.webp"
import imag6 from "./assets/277dfe05024c2fb6.webp"

export default function poster() {
    const deals = [
        {
            img:imag1,
        },
         {
            img:imag2,
        },
         {
            img:imag3,
        },
         {
            img:imag4,
        },
         {
            img:imag5,
        },
         {
            img:imag6,
        },
        

    ]
  return (
    <div className="grid grid-cols-3 gap-2 w-[90%] mx-auto bg-white">
      {deals.map((name  ) =>(
        <img src={name.img} />
      ))}
    </div>
  )
}
