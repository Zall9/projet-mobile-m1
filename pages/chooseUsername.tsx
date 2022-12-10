import { useEffect } from "react";
import { useRouter } from "next/router";

export default function chooseUsername() {
  let router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("username")) {
      router.push("/game").then(() => null);
    }
  });

  function handleChange(event: { target: { value: string } }) {
    localStorage.setItem("username", event.target.value);
  }

  return (
    <form>
      <label>
        Username :
        <input type="text" id="fieldUsername" onChange={handleChange} />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
}
