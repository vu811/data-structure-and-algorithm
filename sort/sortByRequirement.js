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
    isCompleted: false,
    contacts: ['Long Tran', 'Vu Nguyen', 'Hao Dinh']
  },
  {
    requestId: 3,
    requestName: 'REQ2',
    isCompleted: true,
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
  function compareFunc(c1, c2) {
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
      r1.contacts.sort(compareFunc).join(),
      r2.contacts.sort(compareFunc).join()
    )
  )

  return requests
}

function sortByMultipleProps() {}

console.log(sortArrayByChildArray(requests))
