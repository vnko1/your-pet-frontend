const initialFilterValue = (value) => {
  const url = window.location.href;
  if (value === "male" || value === "female") {
    const index = url.indexOf(value);
    const letter = url[index - 1];
    console.log(letter);
    return letter === "=" || letter === "C" ? true : false;
  } else {
    return url.includes(value) ? true : false;
  }
};

export default initialFilterValue;
