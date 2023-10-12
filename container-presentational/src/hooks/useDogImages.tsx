import { useEffect, useState } from "react"

const useDogImages = () => {
  const [dogs, setDogs] = useState([])

  useEffect(() => {
    async function fetchDogs() {
      const res = await fetch(
        "https://dog.ceo/api/breed/labrador/images/random/6"
      );
      const { message } = await res.json()
      setDogs(message)

    }
    fetchDogs();

  }, [])
  return dogs;
}

export default useDogImages