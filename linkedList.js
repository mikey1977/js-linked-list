/**
 * @name  linkedListGenerator
 * @description  Main Module
 * @return {Object} an object exposing methods to be used to manipulate a linked list
 */
function linkedListGenerator() {
  var head  = null;
  var tail = null;
  var length = 0;


  var newLinkedList = {
    getHead : _getHead,
    getTail : _getTail,
    add : _add,
    get : _get,
    remove : _remove,
    insert : _insert
  };
  function createNode(value) {
    length++;
    return {
      value : value,
      next : null
    };

  }

  function _getHead() {
    return head;
  }

  function _getTail() {

    return tail;
  }

  function _add(value) {

    var newNode = createNode(value);



    if (tail === null) {
      head = newNode;

    } else {


      tail.next = newNode;

    }
    tail = newNode;

    return newNode;
  }

    // var newNode = createNode(value);
    // if (length === 0) {
    //   head = newNode;
    //   length++;
    //   return head;
    // } else {
    //   var tail = head;
    //   for (var i = 0; i <= length; i++) {
    //     tail = tail.next;
    //   }
    //   tail = newNode;
    //   return tail;
    // }



  //   if (newLinkedList._getTail() === null) {
  //     head = newNode;
  //     tail = newNode;
  //   } else {
  //     newLinkedList._getTail().next = newNode;
  //     tail = newNode;
  //   }

  // }

  function _get(n) {
    var poop = head;
    if (n < length) {
      for (var i = 0; i < n; i++) {
        poop = poop.next;
      }
      return poop;
    } else {
      return false;
    }
  }

  // function _remove(n) {
  //   var curr = _get(n);
  //   var prev = _get(n -1);
  //   if (n < 0 || n >= length) {
  //     return false;
  //   } else if (n === 0) {
  //     head = null;
  //     head.next = null;


  //   } else {
  //     if (n === length-1) {
  //       prev.next = null;
  //     } else if (curr === head){
  //       head = head.next;
  //     } else {
  //       prev.next = curr.next;
  //     }
  //   }
  //   length--;
  // }


  function _remove(n) {
    var curr = _get(n);
    var prev = _get(n - 1);
    if (n < 0 || n >= length) {
      return false;
    } else if (length === 1) {
      head = null;
      head.next = null;
    } else if (length === 2) {
      if (n === 0) {
        head = head.next;
        tail = null;
      }

    } else if (length > 2) {
      if (n === 0 ) {
        head = head.next;
      } else if (n === length - 1) {
        prev.next = null;
        tail = prev;
      } else {
        prev.next = curr.next;
      }
          length--;
    }

  }






  function _insert(value, n) {
    var current = _get(n);
    var prev = _get(n - 1);
    var crapCrap = _get(n + 1);
    var newNode = createNode(value);
    if (n >= length - 1 || n < 0) {
      return false;
    } else if (n === 0) {
      newNode.next = current;
      head = newNode;
    } else if (n <= length - 1) {
      prev.next = newNode;
      newNode.next = current;

      // } else if (n === length - 1) {
      //   prev.next = newNode;
      //   newNode.next = tail;
    // } else if (n === length - 1) {
    //   prev.next = newNode;
    //   newNode.next = tail;
    }
    length++;

    // if (n === length-1) {
    //   return false;
    // } else if (n === 0) {

    //   newNode = head;
    //   current = current.next;
    //   newNode.next = current;

    //   // current = current.next;
    //   // newNode = current.next;

    // } else {
    //   prev.next = newNode;
    //   newNode.next = current;
    // }


  }

  return newLinkedList;
}
var urlLinks = linkedListGenerator();

urlLinks.add("www.facebook.com");
console.log(urlLinks.insert("www.yahoo.com", 1));
