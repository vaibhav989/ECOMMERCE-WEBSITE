import React from 'react'
import {Link} from 'react-router-dom'
import "./Categories.scss"

const Categories = () => {
  return (
    <div className="categories">
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/15880219/pexels-photo-15880219/free-photo-of-young-fashionable-woman-posing-on-the-street-in-city.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="img1"
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/17029537/pexels-photo-17029537/free-photo-of-young-woman-in-a-modern-denim-outfit.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="img1"
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col">
        <div className="row">
          <img
            src="https://images.pexels.com/photos/18131871/pexels-photo-18131871/free-photo-of-young-man-and-woman-wearing-hoodies-and-standing-in-a-modern-building.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="img1"
          />
          <button>
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
      </div>
      <div className="col col-l">
        <div className="row">
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/5642801/pexels-photo-5642801.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="img1"
              />
              <button>
                <Link className="link" to="/products/1">
                  Sale
                </Link>
              </button>
            </div>
          </div>
          <div className="col">
            <div className="row">
              <img
                src="https://images.pexels.com/photos/18097332/pexels-photo-18097332/free-photo-of-young-woman-with-short-hair-and-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="img1"
              />
              <button>
                <Link className="link" to="/products/1">
                  Sale
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="row">
          <img
            src="https://images.pexels.com/photos/17039184/pexels-photo-17039184/free-photo-of-young-man-and-woman-posing-together-outdoors.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load"
            alt="img1"
          />
          <button>
            <Link className="link" to="/products/">
              Sale
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Categories