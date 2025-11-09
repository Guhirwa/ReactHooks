interface Properties {
    label: string,
    description: string
}
const SectionTitle = (props: Properties) => {
  return (
    <div className="mt-6 gap-4 grid justify-center text-center">
      <h1 className="font-semibold text-3xl mx-auto">{props.label}</h1>
      <p className="text-xl px-80">{props.description}</p>
    </div>
  )
}

export default SectionTitle
