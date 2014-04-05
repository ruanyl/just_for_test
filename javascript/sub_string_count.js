function searchSubstr(fullText, searchText, allowOverlap) {
  allowOverlap = allowOverlap === undefined ? true : allowOverlap;
  if (searchText === '') {
    return 0;
  }
  var stepLength = searchText.length,
    count = 0,
    start,
    end;

  var lapLength = allowOverlap ? 1 : searchText.length;

  for (var i = 0; i < fullText.length - lapLength; i += lapLength) {
    start = i;
    end = start + stepLength;
    var str = fullText.slice(start, end);
    if (str === searchText) count += 1;
  }
  return count;
}

console.log(searchSubstr('aa_bb_cc_dd_bb_e', 'bb'));
console.log(searchSubstr('aaabbbcccc', 'bbb'));
console.log(searchSubstr( 'aaa', 'aa' ));
console.log(searchSubstr( 'aaa', '' ));
console.log(searchSubstr( 'aaa', 'aa', false ));
