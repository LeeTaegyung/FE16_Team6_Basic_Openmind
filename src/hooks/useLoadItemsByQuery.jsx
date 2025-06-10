import { useEffect, useState } from 'react';

import { getSubjects } from '@service/api';

export function useLoadItemsByQuery() {
  const [queryStrings, setQueryStrings] = useState({ offset: 0, sort: 'time' });
  const [result, setResult] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  //세션에 이전 쿼리 존재하면 이걸로 요청해줘
  useEffect(() => {
    const prevQuery = JSON.parse(sessionStorage.getItem('prevQuery'));
    setQueryStrings(prevQuery ? prevQuery : { offset: 0, sort: 'time' });
  }, []);

  // 쿼리스트링 바뀌면 요청 다시
  useEffect(() => {
    if (!queryStrings?.limit) return; //limit아직 설정 안되었으면 하지마

    //변경된 값 세션에 저장해줄래?
    sessionStorage.setItem('prevQuery', JSON.stringify(queryStrings));

    //쿼리 변하면 요청 보내주라
    (async () => {
      try {
        setIsLoading(true);
        const res = await getSubjects(queryStrings);
        setResult(res);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [queryStrings]);

  return {result, queryStrings, setQueryStrings, isLoading};
}
