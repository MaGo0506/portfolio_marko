import { Inter, Poppins } from 'next/font/google'

const inter = Inter({
    weight: ["300", "400", "700"],
    subsets: ['latin'],
  });
  
  const poppins = Poppins({
    weight: ["400", "500", "600", "700"],
    subsets: ['latin'],
  });

const fonts = {
      inter,
      poppins
}

export default fonts;