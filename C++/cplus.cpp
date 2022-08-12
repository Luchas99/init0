#include <iostream>

int main()
{
    int n = 15;
    int arr[n];
    std::cout << arr[0] << " ";
    std::cout << std::endl;

    for (int i = n; i >= 0; i--){
      std::cout << i << " ";
      std::cout << std::endl;
    }

//now know if number is a pair mod 0.
int number = 2;
bool pair; 
if(number % 2 == 0){
  pair = true;
}else{
  pair = false;
}
std::cout << std::endl;
std::cout << "is it pair?";
std::cout << std::endl;
std::cout << pair;

float seven = 7.00;
float mid = seven / 2;
std::cout << "mid";
std::cout << mid;
std::cout << std::endl;


}