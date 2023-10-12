
import useDogImages from "../hooks/useDogImages"

const DogImages = () => {
  const dogs = useDogImages();
  return (
    <>
      {dogs?.map((dog) => {
        return (
          <picture>
            <img style={{
              margin: ".25rem",
              borderRadius: "4px",
            }} width={200} height={200} src={dog} alt="dog" />
          </picture>
        )

      })}
    </>
  )
}

export default DogImages