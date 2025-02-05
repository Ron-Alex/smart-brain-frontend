#include <SFML/Graphics.hpp>

int main() {
    sf::RenderWindow window(sf::VideoMode(800, 600), "Basic Game Engine");

    sf::CircleShape shape(50.0f);
    shape.setFillColor(sf::Color::Green);
    shape.setPosition(375, 275);

    while (window.isOpen()) {
        sf::Event event;
        while (window.pollEvent(event)) {
            if (event.type == sf::Event::Closed)
                window.close();
        }

        // Update game logic here

        window.clear();
        window.draw(shape);
        window.display();
    }

    return 0;
}
