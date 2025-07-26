import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const donationPackages = [
    {
      id: "vip",
      title: "VIP РАНГ",
      price: "299₽",
      description: "Базовые привилегии для комфортной игры",
      features: [
        "Доступ к VIP зоне",
        "Приоритет входа на сервер",
        "+50% к опыту",
        "Кит VIP каждые 24 часа",
        "Цветной ник в чате"
      ],
      color: "neon-green",
      popular: false
    },
    {
      id: "premium", 
      title: "PREMIUM РАНГ",
      price: "599₽",
      description: "Расширенные возможности для продвинутых игроков",
      features: [
        "Все привилегии VIP",
        "Доступ к Premium зоне",
        "Возможность летать (/fly)",
        "+100% к опыту",
        "Кит Premium каждые 12 часов",
        "Команда /heal и /feed"
      ],
      color: "neon-purple",
      popular: true
    },
    {
      id: "elite",
      title: "ELITE РАНГ", 
      price: "999₽",
      description: "Максимальные привилегии для элитных игроков",
      features: [
        "Все привилегии Premium",
        "Доступ к Elite зоне",
        "Команда /god",
        "+200% к опыту",
        "Кит Elite каждые 6 часов",
        "Персональный варп"
      ],
      color: "electric-blue",
      popular: false
    }
  ];

  const serverRules = [
    "Запрещено использование читов и модификаций",
    "Уважительное общение с другими игроками",
    "Запрет на гриф и воровство",
    "Не спамьте в чате",
    "Следуйте указаниям администрации"
  ];

  return (
    <div className="min-h-screen bg-minecraft-dark text-foreground dark">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{ backgroundImage: "url('/img/0ada93cc-6b89-447b-9c0d-a2ca87e598b8.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-minecraft-dark/50 to-minecraft-dark" />
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
            ELECTRIC PAVILEGE
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
            Майнкрафт сервер нового поколения с уникальными возможностями
          </p>
          
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-4 mb-8">
            <Button variant="outline" size="lg" className="hover-scale">
              <Icon name="Home" size={20} className="mr-2" />
              Главная
            </Button>
            <Button variant="outline" size="lg" className="hover-scale">
              <Icon name="Gift" size={20} className="mr-2" />
              Донаты
            </Button>
            <Button variant="outline" size="lg" className="hover-scale">
              <Icon name="ScrollText" size={20} className="mr-2" />
              Правила
            </Button>
          </nav>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 hover-scale">
              <Icon name="Play" size={20} className="mr-2" />
              Играть сейчас
            </Button>
            <Button variant="secondary" size="lg" className="hover-scale">
              <Icon name="Users" size={20} className="mr-2" />
              Discord сервер
            </Button>
          </div>
        </div>
      </section>

      {/* Donation Packages */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              ДОНАТ ПАКЕТЫ
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий ранг и получите уникальные привилегии
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {donationPackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`relative bg-card/50 backdrop-blur-sm border-2 hover:scale-105 transition-all duration-300 ${
                  pkg.popular ? 'border-secondary shadow-lg shadow-secondary/25' : 'border-border'
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-secondary text-secondary-foreground">
                    ПОПУЛЯРНЫЙ
                  </Badge>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full flex items-center justify-center">
                    <Icon name="Crown" size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl font-bold">{pkg.title}</CardTitle>
                  <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  <CardDescription className="text-muted-foreground">
                    {pkg.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Icon name="Check" size={16} className="text-primary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${
                      pkg.popular 
                        ? 'bg-secondary hover:bg-secondary/90 text-secondary-foreground' 
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    }`}
                  >
                    <Icon name="ShoppingCart" size={16} className="mr-2" />
                    Купить ранг
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Server Rules */}
      <section className="py-20 px-6 bg-card/20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
              ПРАВИЛА СЕРВЕРА
            </h2>
            <p className="text-xl text-muted-foreground">
              Соблюдение правил обеспечивает комфортную игру для всех
            </p>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm border-border">
            <CardContent className="p-8">
              <ul className="space-y-4">
                {serverRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted/70 transition-colors">
                    <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-primary font-bold">{index + 1}</span>
                    </div>
                    <span className="text-foreground">{rule}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 p-6 bg-destructive/10 border border-destructive/20 rounded-lg">
                <div className="flex items-center gap-3 mb-2">
                  <Icon name="AlertTriangle" size={20} className="text-destructive" />
                  <span className="font-semibold text-destructive">Важно!</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Нарушение правил может привести к временной или постоянной блокировке аккаунта. 
                  При возникновении спорных ситуаций обращайтесь к администрации.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-primary">ELECTRIC PAVILEGE</h3>
          <p className="text-muted-foreground mb-6">
            Присоединяйся к нашему сообществу и открой новые горизонты в Minecraft!
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" size="sm">
              <Icon name="MessageCircle" size={16} className="mr-2" />
              Discord
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Youtube" size={16} className="mr-2" />
              YouTube
            </Button>
            <Button variant="outline" size="sm">
              <Icon name="Users" size={16} className="mr-2" />
              Форум
            </Button>
          </div>
          
          <div className="mt-8 pt-8 border-t border-border text-sm text-muted-foreground">
            <p>© 2024 Electric Pavilege. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;