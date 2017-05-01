# Uncomment the following lines if you want the script to set up your virtualenv for you:
# virtualenv env
# source virtualenv/bin/activate

# Install dependencies and setup data
pip install -r requirements.txt
cd exampleapp
python manage.py migrate
python manage.py loaddata sample-dinosaurs.json

# Install Angular 2 dependencies
cd ../angular2
npm install
