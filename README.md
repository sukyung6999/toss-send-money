# 토스 송금하기 기능 만들기 (25.1.6~)

## DAY1 (25.1.6)

### 1. 개발 환경 셋팅

- eslint 설정 및 [학습](https://cottony-slope-8c1.notion.site/1-eslint-173effd284f580f79c1bf178a0466097)
- 리액트 라우터 셋팅
- 타입스크립트의 타입 유틸리티 [학습](https://cottony-slope-8c1.notion.site/173effd284f580139d36f1a601b1447e?pvs=4)

## DAY2 (25.1.7)

- 송금 금액 및 키패드 [작업 내용](https://cottony-slope-8c1.notion.site/174effd284f580ddbacbe8fe8cd831b3?pvs=74)

## DAY3 (25.1.10)

- 받을 분에 대한 정보 결정하기

## DAY4 (25.1.13)

- 받을 분에 대한 정보 목업 데이터 만들기
- 목업 데이터를 불러올때 사용자의 개인정보를 활용해서 불러오는 방법 알아보기

## DAY5 (25.1.25)

- express로 목업 데이터(최근 계좌, 은행, 연락처 목록) 생성 및 연결

## DAY6 (25.1.26)

- zustand 설치 및 사용하여 송금확인/완료 페이지에 전달하기
- [변경 전]
  ㄴ 송금 금액: URL 파라미터로 관리
  ㄴ 장점: 새로고침해도 URL에 금액 정보가 유지됨

[변경 후]
ㄴ 송금 금액: Zustand로 상태 관리
ㄴ 문제점: 새로고침 시 상태가 초기화되어 금액 정보 유실
ㄴ 해결책: 새로고침 시 안내 메시지 표시
"페이지 정보가 갱신되었습니다.
뒤로 가기를 눌러 금액을 다시 입력해주세요."

## DAY7 (25.1.28)

- 계좌 실명 조회 추가하기 (백엔드에 몇개의 계좌정보(은행코드,계좌))
- 은행명/계좌번호 입력시 유효성 검사(react-hook-form의 validate와 minLength를 사용함) + [은행선택시 상태관리 방법에 관한 고민](https://cottony-slope-8c1.notion.site/OR-189effd284f580adb4b5d5e28edf9e4e?pvs=4)
