/**
 * v0 by Vercel.
 * @see https://v0.dev/t/L15rkkOP6My
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import banner from '../../assets/banner.jpg'
import levant from '../../assets/levant.jpg'
import conchal from '../../assets/conchal.jpg'
export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center bg-blue-900 text-white">
        <Link href="#" className="flex items-center justify-center" prefetch={false}>
          <HomeIcon className="h-10 w-10" />
          <span className="sr-only">Terrania Capital</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Inicio
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Cómo Funciona
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Proyectos
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Misión y Visión
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Valores
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 xl:pt-48 relative bg-blue-400">
        <Image
        src={banner} // Ruta a tu imagen
        alt="Descripción de la imagen"
        width={1920} // Ancho de la imagen
        height={1080} // Altura de la imagen
        className="absolute inset-0 h-full w-full object-cover"
      />
          <div className="relative z-10 px-4 md:px-6 space-y-8 lg:space-y-12 xl:space-y-16">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Invierte en Proyectos Inmobiliarios con Terrania Capital
              </h1>
              <p className="text-lg text-gray-200">
                Descubre las mejores oportunidades de inversión en el mercado inmobiliario.
              </p>
              <div>
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-800 disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Invierte Ahora
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-400 dark:bg-blue-400 text-blue-900 dark:text-white flex justify-center">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
          Beneficios de Invertir con Terrania Capital
        </h2>
        <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Descubre por qué Terrania Capital es la mejor opción para tus inversiones inmobiliarias.
        </p>
      </div>
      <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2 md:grid-cols-3">
        <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
          <DollarSignIcon className="h-8 w-8 text-blue-900 dark:text-white" />
          <h3 className="mt-4 text-xl font-bold">Bajo Monto Mínimo</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Invierte con una cantidad mínima accesible.</p>
        </div>
        <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
          <PercentIcon className="h-8 w-8 text-blue-900 dark:text-white" />
          <h3 className="mt-4 text-xl font-bold">Alta Rentabilidad</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Obtén altos rendimientos en tus inversiones.</p>
        </div>
        <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
          <LockOpenIcon className="h-8 w-8 text-blue-900 dark:text-white" />
          <h3 className="mt-4 text-xl font-bold">Seguridad</h3>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Invierte con tranquilidad en proyectos respaldados.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-400 text-blue-900 dark:text-white flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestro Método de Trabajo</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conoce nuestro método de trabajo
                </p>
              </div>
              <div className="mx-auto grid gap-6 py-12 sm:grid-cols-3">
                <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
                  <h3 className="mt-4 text-xl font-bold">Desarrollo</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Desarrollamos proyectos inmobiliarios rentables para que puedas invertir con seguridad en ellos.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
                  <h3 className="mt-4 text-xl font-bold">Distribución</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Subimos el proyecto a la página para que sea financiado entre varios pequeños y medianos
                    inversionistas.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
                  <h3 className="mt-4 text-xl font-bold">Resultado</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Repartimos los intereses generados y se regresa el capital invertido a los inversionistas después de
                    la fecha estimada pactada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-400 text-blue-900 dark:text-white flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Misión y Visión</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Conoce más sobre nuestros objetivos y metas a futuro.
                </p>
              </div>
              <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2">
                <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
                  <h3 className="mt-4 text-xl font-bold">Misión</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Ser una empresa de capital privado 100% Mexicana, que invierta estratégicamente en proyectos de
                    desarrollo inmobiliarios y/o comerciales vía aportaciones de socios e inversionistas.
                  </p>
                </div>
                <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
                  <h3 className="mt-4 text-xl font-bold">Visión a Futuro</h3>
                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Formar un patrimonio en activos inmobiliarios que generan rendimientos anuales por encima de los
                    otorgados por la banca, maximizando las utilidades y minimizando los riesgos a través de la
                    planeación estratégica de inversión.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-400 text-blue-900 dark:text-white flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Nuestros Valores</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Fundamos nuestro trabajo en valores bien definidos.
                </p>
              </div>
              <div className="mx-auto grid gap-6 py-12 sm:grid-cols-3">
                <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
                  <h3 className="mt-4 text-xl font-bold">Honorabilidad</h3>
                </div>
                <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
                  <h3 className="mt-4 text-xl font-bold">Confianza</h3>
                </div>
                <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
                  <h3 className="mt-4 text-xl font-bold">Lealtad</h3>
                </div>
                <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
                  <h3 className="mt-4 text-xl font-bold">Disciplina</h3>
                </div>
                <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
                  <h3 className="mt-4 text-xl font-bold">Equidad</h3>
                </div>
                <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
                  <h3 className="mt-4 text-xl font-bold">Responsabilidad</h3>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-400 text-blue-900 dark:text-white flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">OPORTUNIDADES DE INVERSION</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Descubre las mejores oportunidades de inversión en el mercado inmobiliario.
                </p>
              </div>
              <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2">
                <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
                  <h3 className="mt-4 text-xl font-bold">Conchal 7</h3>
                  <Image src={conchal}  alt="conchal" className="border-rounded w-15 h-15 rounded"></Image>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                    mattis, pulvinar dapibus leo
                  </p>
                  <div className="mt-4 text-white font-bold">Abierto</div>
                </div>
                <div className="rounded-lg bg-white p-6 dark:bg-blue-700 shadow">
                  <h3 className="mt-4 text-xl font-bold">Torre Levant</h3>
                  <Image src={levant}  alt="levant" className="border-rounded w-15 h-15 rounded"></Image>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper
                    mattis, pulvinar dapibus leo
                  </p>
                  <div className="mt-4 text-white font-bold">Completado</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50 dark:bg-blue-400 text-blue-900 dark:text-white flex justify-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contacta a Terrania Capital</h2>
                <p className="max-w-[900px] text-white md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-white">
                  Obtén más información sobre nuestros proyectos y oportunidades de inversión.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4 ">
                  <Input type="text" placeholder="Nombre" className="max-w-lg flex-1 dark:bg-white" />
                  <Input type="email" placeholder="Correo Electrónico" className="max-w-lg flex-1 dark:bg-white" />
                  <Textarea placeholder="Mensaje" className="max-w-lg flex-1 dark:bg-white" />
                  <Button type="submit" className="dark:bg-blue-700 dark:text-white">Enviar</Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t bg-blue-900 ">
        <p className="text-xs text-white dark:text-white">
          &copy; 2024 Terrania Capital. Todos los derechos reservados.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Términos de Servicio
          </Link>
          <Link href="#" className="text-xs hover:underline underline-offset-4" prefetch={false}>
            Política de Privacidad
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function DollarSignIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  )
}


function HomeIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  )
}


function LockOpenIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 9.9-1" />
    </svg>
  )
}


function PercentIcon(props:any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" x2="5" y1="5" y2="19" />
      <circle cx="6.5" cy="6.5" r="2.5" />
      <circle cx="17.5" cy="17.5" r="2.5" />
    </svg>
  )
}