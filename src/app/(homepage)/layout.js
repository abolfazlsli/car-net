import Header from "@/components/custom/Header/GlobalHeader"
import "../fonts/style.css"

export default function Layout({children , modal}) {
    return (    
            <>
            <main>
            <Header/>
                {children} 
                {modal}
            </main>
                
            </>
            
            
    )
}