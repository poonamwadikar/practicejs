function isAnagram(s1, s2){
    if(s1.length !== s2.length){
        console.log("not anagram");
        return;
    }
    let arr1 = s1.split('').sort().join('');
    let arr2 = s2.split('').sort().join('');

    if (arr1 === arr2){
        console.log("anagram");

    }else{
        console.log("not anagram")
    }

}
isAnagram("listen", "silent");
isAnagram("hello", "world")
