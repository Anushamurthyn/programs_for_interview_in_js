new Promise((resolve, reject) => {
    throw new Error("error");
  })
    .finally(() => alert("Promise ready")) // triggers first
    .catch(err => alert(err)); 