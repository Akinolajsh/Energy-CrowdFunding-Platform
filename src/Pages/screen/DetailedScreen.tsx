import pix from "../../assets/react.svg"

const DetailedScreen = () => {
  return (
    <div>
        <div className="w-full h-[100vh] flex justify-center items-center">
            <div className="w-[85%] h-full ">
            <div className="w-[50%] h-full">
                <div className="w-full h-[300px]"><img src={pix} alt="" className="w-full h-full"/></div>
                <div>
                    <div>Short Story</div>
                    <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus facilis, quo est autem, at officiis et facere laborum expedita veritatis dolor non id possimus unde?</div>
                </div>
                <div></div>
            </div>
            <div></div>
            <div></div>
            </div>

        </div>
    </div>
  )
}

export default DetailedScreen