#include <bits/stdc++.h>

using namespace std;

int precedence(char symbol){
    switch (symbol)
    {
    case '^':
        return 3;
        break;
    
    case '/':
        return 2;
        break;
    
    case '*':
        return 2;
        break;

    case '+':
        return 1;
        break;
    
    case '-':
        return 1;
        break;
    
    default:
        return 0;
        break;
    }
}

string infixToPostfix(string s){
    stack<char> st;
    int i = 0 ;
    string ans = "";
    int n = s.size();
    while (i < n){
        if(s[i] >= 'A' && s[i] <= 'Z' ||
           s[i] >= 'a' && s[i] <= 'z') {
            ans.push_back(s[i]);
        } else {
            if(st.empty()){
                st.push(s[i]);
            } else {
            if(precedence(s[i]) >= precedence(st.top())){
                st.push(s[i]);
            } else {
                while(precedence(s[i]) >= precedence(st.top())){
                    ans.push_back(st.top());
                    st.pop();
                }
            }
        }
        while(st.empty()){
            ans.push_back(st.top());
        }
        }
    }
    return ans;
}


int main() {
    string Exp = "A+B*C";
    string Answer = infixToPostfix(Exp);
    cout<<Answer;
}



