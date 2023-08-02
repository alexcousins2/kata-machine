import valid_anagram from "@code/ValidAnagram"

test("valid anagram", function() {

    const s1 = "anagram";
    const s2 = "nagaram";
    expect(valid_anagram(s1, s2)).toEqual(true);

    const t1 = "boob";
    const t2 = "test";
    expect(valid_anagram(t1, t2)).toEqual(false);

});
