const requests = [
  {
    requestId: 1,
    requestName: 'REQ3',
    isCompleted: true,
    contacts: ['Vu Nguyen', 'Huy Le']
  },
  {
    requestId: 2,
    requestName: 'REQ1',
    isCompleted: true,
    contacts: ['Long Tran', 'Vu Nguyen', 'Hao Dinh']
  },
  {
    requestId: 3,
    requestName: 'REQ2',
    isCompleted: false,
    contacts: ['Anh Phan']
  }
]

function sortArrayByChildArray(requests, asc = true) {
  /**
   *
   * @param {*} c1
   * @param {*} c2
   * @returns If return value > 0, sort c2 before c1,
   *  if <= 0, leave c1, c2 in the same order
   */
  function compareFunc(c1, c2, lala) {
    const contact1 = c1.toUpperCase()
    const contact2 = c2.toUpperCase()

    if (contact1 < contact2) {
      return asc ? -1 : 1
    }

    if (contact1 > contact2) {
      return asc ? 1 : -1
    }

    return 0
  }

  requests.sort((r1, r2) =>
    compareFunc(
      r1.contacts.sort((a, b) => compareFunc(a, b, 'fff')).join(),
      r2.contacts.sort((a, b) => compareFunc(a, b, 'gg')).join()
    )
  )

  return requests
}

const conditions = [
  {
    prop: 'isCompleted',
    asc: false
  },
  {
    prop: 'requestName',
    asc: false
  }
]

function sortByMultipleProps(requests) {
  const compare = (x, y, prop, asc) => {
    if (x[prop] < y[prop]) {
      return asc ? -1 : 1
    }

    if (x[prop] > y[prop]) {
      return asc ? 1 : -1
    }
    return -2
  }

  const orderBy = (x, y, conditions) => {
    for (let index = 0; index < conditions.length; index++) {
      const result = compare(
        x,
        y,
        conditions[index].prop,
        conditions[index].asc
      )
      if (result !== -2) return result
    }
    return 0
  }

  return requests.sort((x, y) => orderBy(x, y, conditions))
}

console.log(sortByMultipleProps(requests))
//console.log(sortArrayByChildArray(requests))
