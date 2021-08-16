import { LEFT_HALF_CHARACTER, RIGHT_HALF_CHARACTER } from "src/constants/characters"
import TTContainer from "../teletext/container"
import TTText from "../teletext/elements/text"

export default function HomePage() {
 return <p className='bg-blue text-yellow transform scale-100 text-xl'>
   <Header />
   <TTContainer>
     <TTText width={20}>Hello there!</TTText>


     {RIGHT_HALF_CHARACTER}{LEFT_HALF_CHARACTER}
   </TTContainer>
 </p>
}

function Header() {
  return (
    <>
      NOS Teletekst 100 
      
      
      
      
      
    </>
  )
}
