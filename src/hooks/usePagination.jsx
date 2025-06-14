export function usePagination(
  queryStrings,
  setQueryStrings,
  totalDataLength,
  paginationLength,
) {
  const { limit, offset } = queryStrings;

  const totalPageCount = Math.ceil(totalDataLength / limit); //페이지네이션 버튼의 총 갯수
  const currentPage = Math.floor(offset / limit) + 1; //현재 활성화된 페이지
  const paginationStart =
    Math.floor((currentPage - 1) / paginationLength) * paginationLength + 1; //페이지네이션 묶음이 시작하는 숫자(1,6,11...)

  //페이지네이션을 출력하기 위한 배열
  const paginationRange = Array.from(
    { length: paginationLength },
    (_, i) => paginationStart + i,
  ).filter((page) => page <= totalPageCount);

  //이전 페이지네이션으로 가기
  function onPrev() {
    if (paginationStart <= 1) return;

    setQueryStrings((prev) => {
      return {
        ...prev,
        //(묶음 중 가장 처음으로)
        // offset: (paginationStart - paginationLength - 1) * limit,
        //(FeedBack) 이전버튼은 눌렀을 때 1이 아니라 5로 이동하는 게 맞다
        //(묶음 중 가장 마지막으로)
        // (6-1-1) * limit
        offset: (paginationStart - 2) * limit,
      };
    });
  }

  //다음 페이지네이션 가기(5묶음)
  function onNext() {
    if (paginationStart + paginationLength > totalPageCount) return;

    setQueryStrings((prev) => {
      return {
        ...prev,
        offset: (paginationStart + paginationLength - 1) * limit,
      };
    });
  }

  //해당 페이지로 이동
  function onMove(e) {
    const newOffset = (Number(e.target.textContent) - 1) * limit;

    setQueryStrings((prev) => {
      if (newOffset === prev.offset) return prev; //같은 번호 클릭할 때는 다시 렌더링 하지마
      return {
        ...prev,
        offset: newOffset,
      };
    });
  }

  return { paginationRange, currentPage, onNext, onPrev, onMove };
}
