let something;

function superbowlWin(record) {
  something = record.find(function(x) { return x.result === "W" })
  if (something != null) {
    return something.year;
    }
  else {
    
  }
}
