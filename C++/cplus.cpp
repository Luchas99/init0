#include <iostream>

int main()
{
    int numb = 100;
    int *pnumb = &numb;
  std::cout << numb << "\n";
  std::cout << pnumb << "\n";
  std::cout << *pnumb << "\n";

}