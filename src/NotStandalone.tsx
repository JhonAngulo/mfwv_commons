import Button from '@components/Button'

const NotStandalone = (): JSX.Element => {
  const url = `${window.location.origin}/commons_module.js`
  return (
    <>
      <h1>Tu Microfrontend no está aquí</h1>
      <p>
        {`El microfrontend commons_module se ejecuta en modo "integrado". Esto
        significa que no funciona como una aplicación independiente.`}
      </p>
      <p>
        para consumir este recurso utiliza la ruta: <a href={url}>{url}</a>
      </p>
      <Button></Button>
    </>
  )
}

export default NotStandalone
