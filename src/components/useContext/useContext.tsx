// https://www.youtube.com/watch?v=LwvXVEHS638&list=PLZ5oZ2KmQEYjwhSxjB_74PoU6pmFzgVMO&index=5
// https://react.dev/reference/react/useContext

/*
리액트 돔 트리에서 데이터를 전역적으로 사용할 수 있게 해주는 컨텍스트 API
props를 통해서 데이터를 전달해도 되지만 컴포넌트의 깊이가 깊어질수록 데이터를 전달하기 번거로워짐 (prop drilling)

Context는 꼭 필요할 때만 사용
- Context를 사용하면 컴포넌트를 재사용하기 어려워 질 수 있다
- Prop driling 을 피하기 위한 목적이라면 Component Composition (컴포넌트 합성)을 먼저 고려해보자
*/

import Page from './page/Page';

export default function Context() {
  return <Page />;
}
