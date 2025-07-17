import adsimg from "./assets/fshfyghddywgdd-pica.png"
export default function ads() {
    const sam = [{
        img : adsimg,
    }]
  return (
    <div>
      <ul className="w-[96%] mx-auto mt-[20px]">
        {sam.map((name)=>(
        <img src={name.img} className="w-[100%]"/>
        ))}
      </ul>
    </div>
  )
}
