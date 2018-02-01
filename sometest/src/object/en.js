var obj={
  aa:11,
  bbb:11,
  cc:undefined,
}

function stripU(obj) {
  let newobj={
    ...Object.assign(...Object.entries(obj)
      .filter(([k, v])=>v)
      .map(([k, v]) => ({[k]:v}))),
  }
  return newobj

}

stripU(obj)
