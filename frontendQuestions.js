"https://leetcode.com/discuss/interview-question/4103014/IBM-OA-Front-End"
// There are n types of items in a shop's inventory, where the quantity of the ith item is denoted by quantity[i]. These items are to be shipped in two consignments, where the first consignment contains items of type [1, 2, ..., j], and the second consignment contains the remaining item types, where j can be chosen such that 1 ≤ j < n. Note that both consignments must be non-empty, and all items of a type must be in the same consignment.
// The shopkeeper wants the item counts in each consignment to be equal. To achieve this, the shopkeeper can perform the following move any number of times: increase or decrease the quantity of any item type by 1. The quantity of each item type must remain positive throughout.
// Find the minimum number of moves in which the total quantities of both consignments can be made equal if the item types are split optimally.
// Example:
// Consider n = 3, quantity = [1, 4, 4]. Considering 1-based indexing, increase quantity[3] by 1, so quantity' = [1, 4, 5]. Partition using j = 2 and consignments shipped are [1, 4] and [5]. This is optimal, so return the number of operations, 1


"https://leetcode.com/discuss/interview-question/4024498/IBM-Software-Developer-2023-2024-(Full-Time)-HackerRank"
// A password string, pwd, consists of binary characters (Os and 1s). A cyber security expert is trying to determine the minimum number of changes required to make the password secure. To do so, it must be divided into substrings of non-overlapping, even length substrings. Each substring can only contain 1s or Os, not a mix. This helps to ensure that the password is strong and less vulnerable to hacking attacks.
// Find the minimum number of characters that must be flipped in the password string, i.e. changed from 0 to 1 or 1 to 0 to allow the string to be divided as described.
// Note: A substring is a contiguous sequence of characters in a string.
// Example
// Given pwd = "1110011000"
// The two substrings have lengths 8 and 2 respectively. Since both lengths are even, the division is valid. So the answer is 3.
// Function Description
// Complete the function getMinFlips in the editor below.
// getMinFlips takes the following arguments: str pwd: the binary string



to find minimum no of characters to convert password string
maybe this question: "https://leetcode.com/problems/task-scheduler/description/"
#hints:
no of flips = no of characters
2.flip can happen in substrings
3.probably checking consecutive two elements
#Intution:
1.get a string and flip counter
2.iterate over two consecutive elements at a time till the end of string
3.take those each two consecutive elements as substring
4.now compare the values of substring if they are equal pass it else increment the count of flip.
public class SecurePassword{
    public static int getFlips(String s){
        int flips=0;
        int length = s.length();
        for(int i=0;i<length;i+=2){
            String subString = s.substring(i,Math.min(i+2,length) );
            if(substring.contains("0") && substring.contains("1")){
                flips++;
            }
        }
    }
   public static void main(String[] args) {
        String pwd = "1110011000";
        int result = getMinFlips(pwd);
        System.out.println("Minimum number of flips required: " + result);
    }
}


It was a array question. I was told to return a object from a function which would contain getting all the array elements, adding a element, deleting a element. The test was on hacker rank.


I took it about three weeks ago. It was adding Javascript to some pre-made html/css. Some examples they wanted was enable a spinner to signal when a GET request was sent out, take the data from the request, add it up, sort by the dates given from the response and then spawn an html template with x amount of information.
Yep, all vanilla Javascript. They used Express for the API but assuming you get the same problem I did, you won't have to touch it. I'd make sure that you cover how to use the fetch API to hit an endpoint and access the data from a Promise, how to use dates in Javascript, and how to dynamically make HTML elements like using DOM methods such as createElement() and appendChild() before starting your test.
There's are around 10 multiple choice questions going over various front-end topics such as Garbage collection, what CSS to use to recreate some style, etc.