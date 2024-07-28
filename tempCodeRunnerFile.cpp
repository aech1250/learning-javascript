#include <iostream>
using namespace std;
int main(){

    

    for(int i=1; i<=5; i++){
        string starString = "";
        for(int j=0; j<i; j++){
            starString += "*";
        }
        cout<<starString<<endl;
    }

    return 0;
}